// fagment là thẻ bao ngoài các element jsx để thay thế cho thẻ div để đảm bảo trong quá trình render sẽ ko làm ảnh hưởng tới
// cấu trúc của css và html
// hoc la cach tang tinh tai su dung trong cpn bang viec xay dung ham truyen vao cpn va tra ve cpn 
// note cach xay dung ham va cac gan ten va gia tri cho cac props
import React from "react";
class FagmentDemo extends React.Component{
    constructor(props){
        super(props);
    }
    ShowGirlFriends = (props) => {
        return (
          <ul>
            {props.listGirlFriends.map((person, index) => 
            {
              props.children(person);
              return <li key={person.id}>{person.name}</li>;
            })}
          </ul>
        );
      };
    render()
    {
        const myGirlFriends = [
            {
              id: 1,
              name: "Khanh Huyen",
              email: "khanhhuyen123@freetuts.net",
            },
            {
              id: 2,
              name: "Nguyen Hang",
              email: "nguyenhang3dzas@freetuts.net",
            },
            {
              id: 3,
              name: "Pham Uyen",
              email: "phamuyenz@freetuts.net",
            },
          ];
         
        return(
            // <>
            //     <tr>
            //         <div>
            //         <td>name</td>
            //         <td>phone number</td>
            //         <td>email</td>
            //         <td>address</td>
            //         </div>
            //     </tr>
            // </>
           <this.ShowGirlFriends listGirlFriends={myGirlFriends}> 
           {(data)=>{console.log(data)}} 
           </this.ShowGirlFriends>
        )
    }
}
export default FagmentDemo;