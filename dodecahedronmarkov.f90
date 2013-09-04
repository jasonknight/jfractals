PROGRAM DODEMARKOV
IMPLICIT none
REAL (KIND = 8), PARAMETER :: eps = 0.6D0
INTEGER ( KIND = 8 ), PARAMETER :: nn = 20    ! Number of vertices
INTEGER ( KIND = 8 ), PARAMETER :: level = 3    ! Recursion level
! Size of the square on the complex plane
REAL (KIND = 8), PARAMETER :: xymin = -5.0D0
REAL (KIND = 8), PARAMETER :: xymax = 5.0D0
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
REAL*8 Q(3,nn)  ! Vertices multiplied by eps
INTEGER ( KIND = 8 ), PARAMETER :: RES = 512    ! Resolution
REAL*8 eps1,eps3,eps4,fac,delta,delta2,xysize,zi,zr,z2
REAL*8 V0(3,nn)
REAL*8 r(3)
REAL*8 pic(res,res)
REAL*4 maxm
REAL*4 picl(res,res)
INTEGER ip,iq
xysize = xymax-xymin
delta = xysize/real(res)
delta2 = delta/2.0D0

! Cube vertices
V0 = RESHAPE((/0D0, 0D0, 1.0D0, 0.6666666666666667D0, 0D0, &
  0.7453559924999299D0, -0.3333333333333333D0, 0.5773502691896258D0, &
  0.7453559924999299D0, -0.3333333333333333D0, -0.5773502691896258D0, &
  0.7453559924999299D0, 0.7453559924999299D0, 0.5773502691896258D0, &
  0.3333333333333333D0, 0.7453559924999299D0, -0.5773502691896258D0, &
  0.3333333333333333D0, -0.8726779962499649D0, 0.3568220897730899D0, &
  0.3333333333333333D0, 0.1273220037500351D0, 0.9341723589627157D0, &
  0.3333333333333333D0, 0.1273220037500351D0, -0.9341723589627157D0, &
  0.3333333333333333D0, -0.8726779962499649D0, -0.3568220897730899D0, &
  0.3333333333333333D0, 0.8726779962499649D0, &
  0.3568220897730899D0, -0.3333333333333333D0, 0.8726779962499649D0, &
-0.3568220897730899D0, -0.3333333333333333D0, -0.7453559924999299D0, &
  0.5773502691896258D0, -0.3333333333333333D0, -0.1273220037500351D0, &
  0.9341723589627157D0, -0.3333333333333333D0, -0.1273220037500351D0, &
-0.9341723589627157D0, -0.3333333333333333D0, -0.7453559924999299D0, &
-0.5773502691896258D0, -0.3333333333333333D0, 0.3333333333333333D0, &
  0.5773502691896258D0, -0.7453559924999299D0, 0.3333333333333333D0, &
-0.5773502691896258D0, -0.7453559924999299D0, -0.6666666666666667D0, &
  0D0, -0.7453559924999299D0, 0D0, 0D0, -1.0D0/),(/3,nn/))

! Calculating constants
eps1 = 1.0D0 - eps*eps
eps3 = 1.0D0 + eps*eps
eps4 = 1.0D0/( nn*eps3 )
fac = eps1**4/(nn*eps3) !nonuniform
!fac = eps1**2/nn !uniform
Q = eps*V0 ! Vertices multiplied by epsilon
!write(*,*) q(3,1)
do ip = 1,res
!    write(*,FMT="(A1,A,t21,F6.2A)",ADVANCE="NO") achar(13), &
!    & " Percent Complete: ",(real(ip/res))*100.0,"%"
if (modulo(ip,100)==0) then 
    write(*,*) ip 
end if
    zr = xymin + ( ip*delta - delta2)
    do iq = 1,res
        zi = xymin + ( iq*delta - delta2)
        z2 = zi*zi + zr*zr
        r(1) = 2*zr/(1.0D0 + z2)
        r(2) = 2*zi/(1.0D0 + z2)
        r(3) = (-1.0D0 + z2)/(1.0D0 + z2)
        pic(ip,iq) = fp(level,r)
        
    end do    
end do
maxm = 0.0
do ip = 1,res
    do iq = 1,res
      picl(ip,iq) = log10(real(pic(ip,iq))+1.0)
      if ( picl(ip,iq)>maxm ) then
        maxm = picl(ip,iq)
      end if
    end do    
end do
!maxm = log10(maxm);
picl = picl/maxm
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
CALL SETPAG('DA4L')
    !CALL METAFL('EPS')
    CALL TIFMOD(300,'INCH','RESOLUTION')
    !CALL METAFL('TIFF')
    CALL METAFL('CONS')
    CALL DISINI()
    !CALL SETVLT ('RAIN')
    CALL SETVLT ('GREY')
    CALL PAGERA()
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
    CALL AXSPOS(300,1650)
    CALL AX3LEN(1600,1600,1600)
    !CALL GRAF3(-1.,1.,-1.,0.2,-1.,1.,-1.,0.2,0,0.,2.0,0.,0.5)
    CALL LABDIG(1,'XYZ')
    CALL LABELS('FLOAT', 'XYZ')
    !   CALL GRAF3(-8.,8.,-8.,2.0,-8.,8.,-8.,2.0,0.,MAXL,0.,1.0)
    CALL GRAF3(real(xymin),real(xymax),real(xymin),real(xysize)/10.0,real(xymin),real(xymax),real(xymin),real(xysize)/10.0,0.,1.0,0.,1.0)
    CALL CRVMAT(picl,RES,RES,1,2)
    !CALL RTIFF("tif.tiff")
    !    CALL RBMP("parabolic24_04_stereo.bmp")
    CALL DISFIN()
    STOP
CONTAINS
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
recursive function fp(n,v) result(b)
implicit none
integer i,j,n
real*8 v(3),w(3),vq(3),b,den,den3,dot
if (n==0) then
	b = 1.0D0
else
	b = 0.D0
	do i=1,nn
		do j=1,3
			vq(j) = q(j,i);
		end do		
		dot = vq(1)*v(1)+vq(2)*v(2)+vq(3)*v(3)
		den = 1.0D0/(eps3-2.0D0*dot)
		den3 = den**3 ! nonuniform
!        den3 = den**2 !uniform
		w = den * (eps1 * v - 2.0D0 * (1.0D0 - dot) * vq)
		b = b + fp(n-1,w)*den3		
	end do 
	b = fac * b
end if
end function fp
END PROGRAM DODEMARKOV

