import "./App.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const res = await fetch(`https://reqres.in/api/users/`);
  //     const json = await res.json();
  //     setUsers(json.data);
  //   };
  //   getUsers();
  // }, []);
  // console.log(users);
  const handlePageClick = (singleUser) => {
    fetch(`https://reqres.in/api/users/?id=${singleUser.selected}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        users.map((el) => {
          return (
            <div key={el.id}>
              <div className="card align-items-center mb-3">
                <img
                  key={el.avatar}
                  src={el.avatar}
                  className="card-img-top"
                  alt="user photograph"
                />
                <div className="card-body">
                  <h3 className="card-title">
                    ${el.first_name + el.last_name}
                  </h3>
                  <p>${el.email}</p>
                  <p>${el.id}</p>
                </div>
              </div>
            </div>
          );
        });
      });
  };

  return (
    <div>
      {/* {users.map((user) => {
        return (
          <div key={user.id}>
            <div className="card align-items-center mb-3">
              <img
                key={user.avatar}
                src={user.avatar}
                className="card-img-top"
                alt="user photograph"
              />
              <div className="card-body">
                <h3 className="card-title">
                  {user.first_name + user.last_name}
                </h3>
                <p>{user.email}</p>
                <p>{user.id}</p>
              </div>
            </div>
          </div>
        );
      })} */}

      <ReactPaginate
        previousLabel="<<"
        nextLabel=">>"
        breakLabel="..."
        pageCount={6}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default App;
