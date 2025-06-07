import ChildComponent from './ChildComponent';

function ParentComponent() {
  const message = "Hello from Parent";
  return <ChildComponent text={message} />;
}

export default ParentComponent