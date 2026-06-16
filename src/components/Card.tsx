type Props = {
  title: string;
};

function Card({ title }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Card  Content</p>
    </div>
  );
}

export default Card;