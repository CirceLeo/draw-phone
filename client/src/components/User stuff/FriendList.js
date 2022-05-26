function FriendsList({friends}) {

    const renderedFriends = friends.map(friendship => {
        console.log(friendship.friend_id)
        // const friend = friendship.friend
        return(
            <div key={1} className="friend-profile">
                {/* <h4>{friend.username}</h4> */}
            </div>
        )
    })
    
    return (
        <div id="friends-list">
            <h2>wow look at all your friends good job</h2>
            {renderedFriends}
        </div>
    )
}
export default FriendsList