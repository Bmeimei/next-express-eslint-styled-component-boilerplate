import Message from "../src/components/Message";
import { useEffect, useState } from "react";
import Loader from "../src/components/Loader";
import { getMessage } from "../src/api/message";

export default function Home() {
  const [message, setMessage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoaded(true);
        const { data } = await getMessage();
        console.log(data);
        setMessage(data?.message);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoaded(false);
      }
    })();
  }, []);

  if (isLoaded) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <div>
        <h2>Message From Server:</h2>
        <Message message={message} />
      </div>
    </div>
  );
}
