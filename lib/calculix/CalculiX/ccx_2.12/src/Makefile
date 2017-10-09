
CFLAGS = -Wall -O3 -fopenmp -I ../../../SPOOLES.2.2 -DARCH="Linux" -DSPOOLES -DARPACK -DMATRIXSTORAGE -DNETWORKOUT

# GNU-style
FFLAGS = -Wall -O3 -fopenmp

# Intel-style
#FFLAGS = -O3 -fopenmp -nofor-main

CC=gcc
FC=gfortran

.c.o :
	$(CC) $(CFLAGS) -c $<
.f.o :
	$(FC) $(FFLAGS) -c $<

include Makefile.inc

SCCXMAIN = ccx_2.12.c

OCCXF = $(SCCXF:.f=.o)
OCCXC = $(SCCXC:.c=.o)
OCCXMAIN = $(SCCXMAIN:.c=.o)

DIR=../../../SPOOLES.2.2

LIBS = \
       $(DIR)/spooles.a \
	../../../ARPACK/libarpack_INTEL.a \
       -lpthread -lm -lc

ccx_2.12: $(OCCXMAIN) ccx_2.12.a  $(LIBS)
# GNU-style
	./date.pl; $(CC) $(CFLAGS) -c ccx_2.12.c; $(FC) $(FFLAGS) -o $@ $(OCCXMAIN) ccx_2.12.a $(LIBS)

# Intel-style
#	./date.pl; $(CC) $(CFLAGS) -c ccx_2.12.c; $(FC) -fopenmp -nofor-main -O3 -o $@ $(OCCXMAIN) ccx_2.12.a $(LIBS)

ccx_2.12.a: $(OCCXF) $(OCCXC)
	ar vr $@ $?
