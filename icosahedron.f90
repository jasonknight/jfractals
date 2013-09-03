    PROGRAM hypico
    ! Hyperbolic icosahedron fractal
    ! Makes my belowed icosahedron

    IMPLICIT none
    CHARACTER(LEN=80)  :: FORMAT
    INTEGER*4 contrast
    INTEGER ( KIND = 8 ), PARAMETER :: NN = 1000    ! Resolution
    INTEGER ( KIND = 8 ), PARAMETER :: NIT = 100000000
    REAL (KIND = 8), PARAMETER :: ALPHA = 0.77D0    
    !! Contrast parameters
    REAL*4 a1,a2,a3,a4,b1,b2,b3,b4,dx1,dx2,dx3,dx4,dy1,dy2,dy3,dy4,k1,k2,k3,k4
    INTEGER*8 :: DENSITY(NN,NN)
    REAL*4 :: DENSITYL(NN,NN)
    REAL*4 MAXL
    ! Constants for probabilities
    REAL*4 C1,C2
    ! Six matrices:
    REAL*8 L(12,4,4)
    ! Running four-vectors:
    REAL*8 X(4)
    REAL*8 X1(4)
    REAL*8 A		!For normalization
    ! Random numbers:
    REAL RR                                         ! Random number in (0,1)
    INTEGER R 
    INTEGER*8 I,J,K,M,N
    !   Setting contrast parameters from GIMP
    !a1 = 10.0/255.0
    !a2 = 2.5/8.0
    !a3 = 4.0/8.0
    !b1 = 4.5/8.0
    !b2 = 5.5/8.0
    !b3 = 1.0
    contrast = 0
    a1 = 10.0/255.0
    a2 = 17.0/255.0
    a3 = 108.0/255.0
    a4 = 159.0/255.0
    b1 = 0.0
    b2 = 72.0/255.0
    b3 = 198.0/255.0
    b4 = 1.0
    
    dx1 = a1 - 0.0
    dx2 = a2 - a1
    dx3 = a3 - a2
    dx4 = a4 - a3
    dy1 = b1 -0.0
    dy2 = b2 - b1
    dy3 = b3 - b2
    dy4 = b4 - b3
    k1 = dy1/dx1
    k2 = dy2/dx2
    k3 = dy3/dx3
    k4 = dy4/dx4
!    Initialization:
    ! Calculate constants for probabilities
    C1 = 1./6.0
    C2 = 1.0/(3.0 * (1.0 + ALPHA**2))
    DENSITY(1:NN,1:NN) = 1.D0                       ! iNITIALIZATION
    DENSITYL(1:NN,1:NN) = 0.D0     
    CALL RANDOM(RR)                                 ! Initialize random x-component
    X(1) = 2*RR - 1                                 ! Move from (0,1) to (-1,1)
    CALL RANDOM(RR)                                 ! Initialize random y-component
    X(2) = 2 * RR - 1                               ! Move from (0,1) to (-1,1)
    CALL RANDOM(RR)                                 ! Initialize random z-component
    X(3) = 2 * RR - 1                               ! Move from (0,1) to (-1,1)
    A = DSQRT(X(1)**2+X(2)**2+X(3)**2)              ! Calculate the norm
    X(1:3) = X(1:3)/A                               ! Normalize the first three component
    X(4) = 1.0D0
    INCLUDE 'Matrices.fi' 
  !  Skipping first 100000 points
      DO I=1,100000                              
        CALL RANDOM(RR)                     ! Choose random integer [1,24]        
        R=CEILING(12*RR)
        ! Apply the selected matrix
        X1(1) = L(R,1,1)*X(1)+L(R,1,2)*X(2)+L(R,1,3)*X(3)+L(R,1,4)
        X1(2) = L(R,2,1)*X(1)+L(R,2,2)*X(2)+L(R,2,3)*X(3)+L(R,2,4)
        X1(3) = L(R,3,1)*X(1)+L(R,3,2)*X(2)+L(R,3,3)*X(3)+L(R,3,4)
!        X1(4) = L(R,4,1)*X(1)+L(R,4,2)*X(2)+L(R,4,3)*X(3)+L(R,4,4)
        A = 1.0D0/DSQRT( X1(1)*X1(1) + X1(2) * X1(2)+ X1(3) * X1(3) )
        ! Normalize the first three components
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        X(1) = X1(1)*A
        X(2) = X1(2)*A
        X(3) = X1(3)*A
        X(4) = 1.0D0 
      END DO      
      
    DO I=1,NIT ! Main loop
        ! Main loop
        CALL RANDOM(RR)                     ! Choose random integer [1,24]   
        IF (modulo(I,CEILING(NIT/100.0)) == 0) THEN
            !FORMAT = "I3"
            WRITE(*,'(I10)') I
        END IF 
        R=CEILING(12*RR)
        ! Apply the selected matrix
        X1(1) = L(R,1,1)*X(1)+L(R,1,2)*X(2)+L(R,1,3)*X(3)+L(R,1,4)
        X1(2) = L(R,2,1)*X(1)+L(R,2,2)*X(2)+L(R,2,3)*X(3)+L(R,2,4)
        X1(3) = L(R,3,1)*X(1)+L(R,3,2)*X(2)+L(R,3,3)*X(3)+L(R,3,4)
!        X1(4) = L(R,4,1)*X(1)+L(R,4,2)*X(2)+L(R,4,3)*X(3)+L(R,4,4)
        A = 1.0D0/DSQRT( X1(1)*X1(1) + X1(2) * X1(2)+ X1(3) * X1(3) )
        ! Normalize the first three components
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        X(1) = X1(1)*A
        X(2) = X1(2)*A
        X(3) = X1(3)*A
        X(4) = 1.0D0 
        ! Why should I waste good points? Skipping "if"
!                IF (X(3)>0) THEN
        M = MAX(CEILING((X(1)+1.0)*NN/2),1)
        N = MAX(CEILING((X(2)+1.0)*NN/2),1)
        DENSITY(M,N)=DENSITY(M,N)+1
 !               END IF
    END DO       
    ! Calculate Log of density and its max value:
    MAXL = 0
    DO I=1,NN
        DO  J=1,NN
            DENSITYL(I,J)=LOG10(REAL(DENSITY(I,J)))
!            DENSITYL(I,J)=REAL(DENSITY(I,J))
            IF (DENSITYL(I,J)>MAXL) THEN
                MAXL = DENSITYL(I,J)
            END IF
        END DO
    END DO
    ! Normalize
    DO I=1,NN
    DO J=1,NN
    DENSITYL(I,J) = DENSITYL(I,J)/MAXL
    END DO
    END DO
    ! Contrast
    If (contrast == 1) then
    DO I=1,NN
    DO J=1,NN
        IF (DENSITYL(I,J) < a1) THEN
    DENSITYL(I,J) = k1*DENSITYL(I,J)
        ELSE
            IF (DENSITYL(I,J) < a2) THEN
              DENSITYL(I,J) = b1+k2*(DENSITYL(I,J) - a1)
            ELSE 
                IF (DENSITYL(I,J) < a3) THEN 
                DENSITYL(I,J) = b2+k3*(DENSITYL(I,J) - a2)
                ELSE 
                    IF (DENSITY(I,J) < a4) THEN
                        DENSITYL(I,J) = b3+k4*(DENSITYL(I,J) - a3)
                        ELSE
                DENSITYL(I,J) = 1.0;
                END IF
            END IF
        END IF
    END IF
    END DO
    END DO
    end if
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   
    !CALL SETPAG('DA4L')
    CALL METAFL('CONS')   
    CALL SCRMOD ('REVERSE')
    CALL PAGE(1300,1300)
    CALL winsiz(1040,1150)
    CALL sclmod("full")
    CALL DISINI()
!    CALL PAGERA()
!   CALL PAGE(1400,1400)
    !CALL SETVLT ('GREY')
    !CALL SETVLT ('RAIN')
    CALL SETVLT ('TEMP')
    !CALL SETVLT ('SPEC')
!    CALL PAGE(1345,11345)

    CALL HWFONT()
    !CALL HWPAGE (2400, 2400) !12 cm
    !CALL HWPAGE (1200, 1200) !12 cm
    !CALL PAGE (2400, 2400)
   
    !CALL TITLIN('TEST')
    !CALL NAME('X-AXIS','X')
    !CALL NAME('Y-AXIS','Y')
    !CALL NAME('Z-AXIS','Z')
    CALL INTAX()
    CALL AUTRES(NN,NN)
    !CALL AXSPOS(100,1100)
    CALL AXSPOS(150,1160)
    !CALL AX3LEN(1000,1000,1000)
    CALL AX3LEN(1100,1100,1100)
    !CALL GRAF3(-1.,1.,-1.,0.2,-1.,1.,-1.,0.2,0,0.,2.0,0.,0.5)
    CALL NOBAR
    CALL LABDIG(1,'XYZ')
    CALL LABELS('FLOAT', 'XYZ')
    CALL GRAF3(-1.,1.,-1.,0.5,-1.,1.,-1.,0.5,0.,1.0,0.,1.0)
!    CALL GRAF3(-1.,1.,-1.,0.5,-1.,1.,-1.,0.5,0.,MAXL,0.,1.0)
    CALL CRVMAT(DENSITYL,NN,NN,1,2)
    CALL RBMP("octahedon11000mln058a.bmp")
    !!CALL VLTFIL('rainbow.txt','SAVE')
    CALL DISFIN()
    STOP
    CONTAINS

    FUNCTION PROB(I,X,Y,Z)
    REAL PROB,X,Y,Z
    INTEGER I
    REAL*4 C1
    SELECT CASE(I)
    CASE(1)
        Prob = C1 + C2*X
    CASE(2)
        Prob = C1 + C2*Y
    CASE(3)
        Prob = C1 + C2*Z
    CASE(4)
        Prob = C1 - C2*Z
    CASE(5)
        Prob = C1 - C2*Y
    CASE(6)
        Prob = C1 - C2*X
    END SELECT
    END FUNCTION PROB 
    END PROGRAM hypico