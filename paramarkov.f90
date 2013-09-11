    PROGRAM PARAMARKOV
    IMPLICIT none
    !!!!!!!!!!!!!!! Naming images
    CHARACTER(LEN=3) :: rstr0
    CHARACTER(LEN=7) :: rstr1
    CHARACTER(LEN=7) :: rstr2
    CHARACTER(LEN=20) :: rstr ! To name the saved image
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    REAL (KIND = 8), PARAMETER :: ALPH = 0.8D0
    REAL (KIND = 8), PARAMETER :: ALPHA = 5.0D0*0.8D0
    INTEGER ( KIND = 8 ), PARAMETER :: level = 3    ! Recursion level

    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    ! Size of the square on the complex plane
    REAL*8 xylimit
    INTEGER ( KIND = 8 ), PARAMETER :: RES = 1000    ! Resolution
    REAL*8 fac,delta,delta2,zi,zr,z2,xysize
    REAL*8 r(3)
    REAL*8 pic(res,res)
    REAL*4 maxm
    REAL*4 picl(res,res)
    REAL*8 L(24,4,4)
    INTEGER ip,iq,displaytype
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    xylimit = 8.0D0    
    !displaytype = 0 ! Stereographic
     displaytype = 1 ! Spherical
    If (displaytype == 1) then
        xylimit = 1.0D0
    end if
    xysize = 2.0D0*xylimit
    delta = xysize/real(res)
    delta2 = delta/2.0D0
    !!!!!!!!!!!
    !!!!!!!!!!!!!!!!!!!!!!
    ! Building strings for naming images
    write(rstr1,"(F6.3)") alpha
    write(rstr2,"(I2.2)") level
    rstr = trim(rstr0)//trim(rstr1)//'L'//trim(rstr2)//'.bmp'
    !!!!!!!!!!!!!!!!!!!!!!
    ! Calculating constants
    fac = 1.0D0/24.0D0
    INCLUDE "para.fi"
    if (displaytype == 0) then
        do ip = 1,res
            if (modulo(ip,100)==0) then 
                write(*,*) ip 
            end if
            zr = -xylimit + ( ip*delta - delta2)
            do iq = 1,res
                zi = -xylimit + ( iq*delta - delta2)
                z2 = zi*zi + zr*zr
                r(1) = 2*zr/(1.0D0 + z2)
                r(2) = 2*zi/(1.0D0 + z2)
                r(3) = (-1.0D0 + z2)/(1.0D0 + z2)
                pic(ip,iq) = fp(level,r) 
            end do    
        end do
    else
        do ip = 1,res
            if (modulo(ip,100)==0) then 
                write(*,*) ip 
            end if
            zr = -xylimit + ( ip*delta - delta2)
            do iq = 1,res
                zi = -xylimit + ( iq*delta - delta2)
                z2 = zi*zi + zr*zr
                if (z2<1) then
                    r(1) = zr
                    r(2) = zi
                    r(3) = sqrt(1.0D0-z2)
                    pic(ip,iq) = fp(level,r) 
                end if
            end do    
        end do  
    end if
    maxm = 0.0
    do ip = 1,res
        do iq = 1,res
            picl(ip,iq) = log10(real(pic(ip,iq))+1.0)
            if ( picl(ip,iq)>maxm ) then
                maxm = picl(ip,iq)
            end if
        end do    
    end do
    picl = picl/maxm
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    !!CALL SETPAG('DA4L')
    !CALL METAFL('EPS')
    !!CALL TIFMOD(300,'INCH','RESOLUTION')
    !CALL METAFL('TIFF')
    CALL FILMOD ("VERSION")
    CALL METAFL('CONS')
    CALL PAGE(1300,1300)
    CALL winsiz(1040,1150)
    CALL sclmod("full")
    CALL DISINI()
    CALL SETVLT ('RAIN')
    !CALL SETVLT ('GREY')
    !!CALL PAGERA()
    CALL HWFONT()
    !CALL HWPAGE (2400, 2400) !12 cm
    !CALL HWPAGE (1200, 1200) !12 cm
    !CALL PAGE (2400, 2400)
    !CALL TITLIN('TEST')
    !CALL NAME('X-AXIS','X')
    !CALL NAME('Y-AXIS','Y')
    !CALL NAME('Z-AXIS','Z')
    CALL INTAX()
    CALL AUTRES(RES,RES)
    !!CALL AXSPOS(300,1650)
    !!CALL AX3LEN(1600,1600,1600)
    CALL AXSPOS(150,1160)
    CALL AX3LEN(1100,1100,1100)
    CALL NOBAR
    !CALL GRAF3(-1.,1.,-1.,0.2,-1.,1.,-1.,0.2,0,0.,2.0,0.,0.5)
    CALL LABDIG(1,'XYZ')
    CALL LABELS('FLOAT', 'XYZ')
    !   CALL GRAF3(-8.,8.,-8.,2.0,-8.,8.,-8.,2.0,0.,MAXL,0.,1.0)
    CALL GRAF3(-real(xylimit),real(xylimit),-real(xylimit),2.0,-real(xylimit),real(xylimit),-real(xylimit),2.0,0.,1.0,0.,1.0)
    CALL CRVMAT(picl,RES,RES,1,2)
    !CALL RTIFF("tif.tiff")
    CALL RBMP(rstr)
    !CALL RBMP("parabolic24_04_stereo.bmp")
    CALL DISFIN()
    STOP
    CONTAINS
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    recursive function fp(n,v) result(b)
    implicit none
    integer i,j,n
    real*8 v(3),u(3),w(3),A,b,den
    if (n==0) then
        b = 1.0D0
    else
        b = 0.D0
        do i=1,24
            do j=1,3
                u(j) = L(i,j,1)*v(1)+L(i,j,2)*v(2)+L(i,j,3)*v(3)+L(i,j,4)
            end do	
            A = sqrt (u(1)*u(1)+u(2)*u(2)+u(3)*u(3) )
            w = u/A
            den = (L(i,4,1)*v(1)+L(i,4,2)*v(2)+L(i,4,3)*v(3)+L(i,4,4))
            den = den*den
            b = b + fp(n-1,w)/den	
        end do 
        b = fac * b
    end if
    end function fp
    END PROGRAM PARAMARKOV

