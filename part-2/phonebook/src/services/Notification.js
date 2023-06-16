const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  const messageClass = message.type === "error" ? "error" : "entry";

  return <div className={messageClass}>{message.text}</div>;
};

export default Notification;
