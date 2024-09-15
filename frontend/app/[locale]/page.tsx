import { Button } from '@nextui-org/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '#nz/shadcn/components/Dialog';

const Home = () => (
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

export default Home;
