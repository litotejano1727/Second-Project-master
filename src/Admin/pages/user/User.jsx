import { CalendarToday, FileUpload, LocationOn, MailOutline, PermIdentity, PhoneAndroid } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./user.css"

function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/Admin/newUser">
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://cdn2.sharechat.com/beautifulgirlprofilepicture_2af4ace9_1601227877970_cmprsd_40.jpg" alt="user" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Luther Marte</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBotton">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">luthear99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">12.14.2022</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+639 549 354</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">luthear99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationOn className="userShowIcon"/>
                        <span className="userShowInfoTitle">Manila | Philippines</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateFrom">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder="luthear99" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="Luther Marte" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder="luthear99@gmail.com" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder="+639 549 354" className="userUpdateInput"/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder="Manila | Philippines" className="userUpdateInput"/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className="userUpdateImg" src="https://cdn2.sharechat.com/beautifulgirlprofilepicture_2af4ace9_1601227877970_cmprsd_40.jpg" alt="update"/>
                            <label htmlFor="file">
                                <FileUpload className="userUpdateIcon"/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User