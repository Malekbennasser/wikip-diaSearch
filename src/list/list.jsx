const List = (props) => {
  return (
    <div>
      <li>
        <a href={props.content} target="blank">
          {props.content}
        </a>
      </li>
    </div>
  );
};

export default List;
