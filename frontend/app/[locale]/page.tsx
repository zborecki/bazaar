'use client';

import { Button } from '@nextui-org/button';
import { useEffect } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '#nz/shadcn/components/Dialog';

const Home = () => {
  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3000/maintenance-mode');

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
    };

    eventSource.onerror = (err) => {
      console.error('Błąd SSE:', err);
      eventSource.close();
    };

    return () => eventSource.close();
  }, []);

  return (
    <main>
      <Button color="primary">Button</Button>
      <Dialog>
        <DialogTrigger>
          Trigger
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Home;
