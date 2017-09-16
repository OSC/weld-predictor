.POSIX:
#----------------------------------------
#
#  file created 98jun18, cca, (cleve.ashcraft@boeing.com)
#  based on work by clay breshears (clay@turing.wes.hpc.mil)
#  (much appreciated)
#
#----------------------------------------
# for OSC MPI
#
CC = mpicc
#
#----------------------------------------
#
#  set the compiler flags
# 
OPTLEVEL = -O3
CFLAGS = $(OPTLEVEL) $(MPI_CFLAGS) -fopenmp 
#
#----------------------------------------
#
#  set any load flags
#
LDFLAGS = $(MPI_LIBS)
#
#---------------------------------------------------------------------
#
#  set any thread libraries
#
# THREAD_LIBS =
# THREAD_LIBS = -D_REENTRANT=199506L -lpthread
  THREAD_LIBS = -D_POSIX_C_SOURCE=199506L -lpthread
# THREAD_LIBS = -lpthread
#
#---------------------------------------------------------------------
#
#  set the purify environment (a memory monitoring tool)
#
  PURIFY = 
# PURIFY = /usr/local/purify-4.0.1/purify
#
#  purify wouldn't work with the newest version of the gcc library,
#  so we had to force loading the old version
#
  PURIFY_GCC_VERSION = 
# PURIFY_GCC_VERSION = -V 2.7.2
#
#---------------------------------------------------------------------
#
#  set the archive flags
#
  AR = ar
  ARFLAGS = rv
#
#---------------------------------------------------------------------
#
#  set the ranlib environment
#  (if ranlib is not needed, we echo the library name)
#
# RANLIB = ranlib
  RANLIB = echo
#
#---------------------------------------------------------------------
#
#  set suffix rule *.c --> *.o
#
.c.o : 
	$(PURIFY) $(CC) -c $(CFLAGS) $<
#
#---------------------------------------------------------------------
#
#  set suffix rule *.c --> *.a
#
.c.a : 
	$(PURIFY) $(CC) -c $(CFLAGS) $<
	$(AR) $(ARFLAGS) $@ $*.o
	rm -f $*.o
#
#---------------------------------------------------------------------
#
#  MPI install library
#
# MPI_INSTALL_DIR = /usr/local/mpich-1.0.13
MPI_INSTALL_DIR = $(MPICH_HOME)
#
#---------------------------------------------------------------------
#
#  MPI library path
#
# for sgi
#
# MPI_LIB_PATH = 
#
# for solaris
#
# MPI_LIB_PATH = -L$(MPI_INSTALL_DIR)/lib/solaris/ch_p4
#
# for hp
#
# MPI_LIB_PATH = 
#
#---------------------------------------------------------------------
#
#  MPI libraries 
#
# for solaris
#
# MPI_LIBS = $(MPI_LIB_PATH) -D_REENTRANT -lmpi -lsocket -lnsl -lthread
#
# for sgi
#
# MPI_LIBS = $(MPI_LIB_PATH) -lmpi -lpthread 
#
# for hp
# MPI_LIBS = -lpthread
# MPI_LIBS = $(MPI_LIB_PATH) -lpthread 
#
# for intel
# //  Just use MPI_LIBS
#
#---------------------------------------------------------------------
#
#  MPI include path
#
# MPI_INCLUDE_DIR = 
MPI_INCLUDE_DIR = -I$(MPI_INSTALL_DIR)/include
#
#---------------------------------------------------------------------
