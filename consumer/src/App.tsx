import { Avatar, AvatarFallback, AvatarImage, Button } from "@dantorres/ui-kit";

export function App() {
  return (
    <div>
      <Button>Hello Dan!</Button>

      <Avatar>
        <AvatarImage
          src="https://github.com/danillotorresdev.png"
          alt="@danillotorresdev"
        />
        <AvatarFallback>MS</AvatarFallback>
      </Avatar>
    </div>
  );
}
