import React from 'react'

function Profile() {
  return (


<div>
      <div className="container" style={{ marginTop: '150px' }}>
        <div className="main-body">

          {/* <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li className="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav> */}


          <div className="row gutters-sm" style={{ backgroundColor: 'white' }}>
            <div className="col-md-4 mb-3">
              <div className="card" style={{ backgroundColor: '#edf3f8' }}>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"></img>
                    <div className="mt-3">
                      {/* <h4>{user.name}</h4> */}
                      <div className="row">
                        <div className="col-sm-3" style={{ width: '320px', marginLeft: '70px', marginTop: '20px' }}>
                          {/* <button class="book-a-table-btn scrollto d-none d-lg-flex " target="__blank" ><Link to={{ pathname: `/EditProfile/${ID}` }} >Edit Your Profile </Link></button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-8" style={{ backgroundColor: '#edf3f8' }}>
              <div className="card mb-3" style={{ backgroundColor: 'white', marginTop: '20px' }}>
                <h3>Personal Information</h3>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">

                      <h6 className="mb-0">Full Name </h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {/* {user.name} */}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {/* {user.email} */}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {/* {user.phone} */}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Password</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {'**************'}
                    </div>
                  </div>


                </div>
              </div>





            </div>
          </div>

        </div>
      </div>

      <div class="col-md-12" style={{ marginLeft: '280px', width: '70%', marginTop: '40px' ,marginBottom:'50px'}}>
                   <h3> History</h3>
                   <div className="row">
                       <table class="table table-secondery" style={{ color: ' #6c757d' }}>
                           <thead>
                               <tr>
                                   <th scope="col">#</th>
                                   <th scope="col">Table</th>
                                   <th scope="col">Date</th>
                                   <th scope="col">Time</th>
                               </tr>
                           </thead>
                           <tbody>
                               <tr>
                                   <th scope="row">1</th>
                                   <td>Mark</td>
                                   <td>Otto</td>
                                   <td>@mdo</td>
                               </tr>
                               <tr>
                                   <th scope="row">2</th>
                                   <td>Jacob</td>
                                   <td>Thornton</td>
                                   <td>@fat</td>
                               </tr>
                               <tr>
                                   <th scope="row">3</th>
                                   <td>Larry</td>
                                   <td>the Bird</td>
                                   <td>@twitter</td>
                               </tr>
                           </tbody>
                       </table>
                   </div>
               </div>
    </div>

        
        

  )
}

export default Profile; 