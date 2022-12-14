import { TextField } from "../atom/TextField";
import { Button } from "../atom/Button";

export const CommentForm = () => {
  // Commentaire - Exercise
  return (
    <form className="flex flex-col w-full gap-4 md:px-8">
      <TextField
        label="Comment"
        id="username"
        type="text"
        placeholder="Comment"
      />

      <TextField
        label="Username"
        id="comment"
        type="text"
        placeholder="Username"
        component="textarea"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
