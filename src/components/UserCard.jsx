function UserCard(promps) {
  return (
    <div className="user-card">
      <img src={promps.image} />
      <h2>Name :{promps.name}</h2>
        <p>Age: {promps.age}</p>
      <p>Bio : {promps.bio}</p>

    </div>
  );
}
export default UserCard;