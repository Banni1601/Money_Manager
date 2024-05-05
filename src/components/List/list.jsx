const List = (props) => {
  const { data, deleteList } = props;
  const { ID, TITLE, AMOUNT, TYPE } = data;
  const deleteTheList = () => {
    deleteList(ID);
  };
  return (
    <div>
      <p>{TITLE}</p>
      <p>{AMOUNT}</p>
      <p>{TYPE}</p>
      <button type="button" onClick={deleteTheList}>
        Delete
      </button>
    </div>
  );
};
export default List;
