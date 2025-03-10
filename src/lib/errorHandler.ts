interface SystemError extends Error {
  code?: string;
  path?: string;
  errno?: number;
  syscall?: string;
}

process.on('uncaughtException', (error: SystemError) => {
  if (error.code === 'EPERM' && error.path?.includes('.next/trace')) {
    console.warn('Trace file permission error - ignoring');
    return;
  }
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason: unknown, promise: Promise<unknown>) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

export {};
