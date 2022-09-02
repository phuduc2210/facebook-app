import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}){

    const HomeRightbar = ()=>{
        return(
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Thịnh</b> and <b>3 other friends</b> have a birthday today</span>
                </div>
                <img src="assets/ad1.jpeg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}  />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar= ()=>{
        return(
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City: </span>
                    <span className="rightbarInfoValue">Hà Nội</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From: </span>
                    <span className="rightbarInfoValue">Thái Nguyên</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship: </span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Phạm Thu Trang</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Phùng Mạnh Dũng</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Vũ Thị Thanh</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Trần Mỹ Linh</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Nguyễn Văn Tuấn</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Lê Công Thịnh</span>
                </div>
            </div>
            </>
        )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}