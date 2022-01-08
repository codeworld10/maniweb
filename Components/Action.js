import Image from "next/image"
function Action() {

    const whats = () => {
        window.open("https://wa.me/+923413160032");
      }
    return (
        <div>
              <div onClick={whats} className="bodydown">
                 <h4 className="call">Contact Now</h4> 
             <Image
            className="sere_img"
            src="/images/what.png"
            width="50"
            height="42"
          ></Image>
        </div>
        </div>
    )
}

export default Action

