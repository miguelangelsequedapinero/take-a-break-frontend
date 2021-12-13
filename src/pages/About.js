import "../About.css";
import rocket from "../assets/3d-rocket.png";
import sunshine from "../assets/highlight_05.png";
import linkedin from "../assets/linkedin.png";
import link from "../assets/link.png";
import highlight from "../assets/Highlight10.png";
export default function About() {
  const team = [
    {
      name: "Emma Li",
      role: "Product Designer",
      linkedin: "https://www.linkedin.com/in/emmalili/",
      website: "#",
      picture:
        "https://ik.imagekit.io/vvd9qbmes2h/Recharge/team/emma_XsZE4e-z_.png",
      favCoffee: {
        pic: "https://ik.imagekit.io/vvd9qbmes2h/Recharge/coffee/Latte_H3giGGdOr.png",
        name: "Latte",
      },
    },
    {
      name: "Ping Zhang",
      role: "Product Manager",
      linkedin: "https://www.linkedin.com/in/pingchengzhang/",
      website: "#",
      picture:
        "https://ik.imagekit.io/vvd9qbmes2h/Recharge/team/ping_O15bB3uqG.png",
      favCoffee: {
        pic: "https://ik.imagekit.io/vvd9qbmes2h/Recharge/coffee/Macchiato_goljddHqa.png",
        name: "Macchiato",
      },
    },
    {
      name: "Mihail Soltan",
      role: "Lead Developer",
      linkedin: "https://www.linkedin.com/in/mihail-soltan/",
      website: "https://www.mihailsoltan.com",
      picture:
        "https://ik.imagekit.io/vvd9qbmes2h/Recharge/team/mihail_UUM9vzG0T.png",
      favCoffee: {
        pic: "https://ik.imagekit.io/vvd9qbmes2h/Recharge/coffee/Americano_JecNydkXE.png",
        name: "Americano",
      },
    },
    {
      name: "Miguelangel Sequeda",
      role: "Software Developer",
      linkedin: "https://www.linkedin.com/in/miguesequeda/",
      website: "https://github.com/gaiasamadhi",
      picture:
        "https://ik.imagekit.io/vvd9qbmes2h/Recharge/team/miguelangel_C54-TSIG1.png",
      favCoffee: {
        pic: "https://ik.imagekit.io/vvd9qbmes2h/Recharge/coffee/Espresso_Romano_IaIP030W9.png",
        name: "Espresso Romano",
      },
    },
  ];
  const imageBorder =
    "https://ik.imagekit.io/vvd9qbmes2h/Recharge/coffee/cup_rP4N3rujO.png";
  return (
    <>
      <div className="about">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={sunshine} style={{ width: "57px", height: "62px" }} />
          <h1 style={{ marginTop: "40px" }}>The Team</h1>
        </div>
        <div className="team">
          {team.map((m) => (
            <div style={{ width: "20vw" }}>
              <img className="memberImage" src={m.picture} />
              <h2>{m.name}</h2>
              <h3>{m.role}</h3>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <a href={m.linkedin} target="_blank">
                  <img src={linkedin} />
                </a>
                <a href={m.website} target="_blank">
                  <img src={link} />
                </a>
              </div>
              <h3>Favourite coffee:</h3>
              <img src={m.favCoffee.pic} />
              <h3>{m.favCoffee.name}</h3>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            marginTop: "40px",
            position: "relative",
          }}
        >
          <h1 style={{ position: "absolute", left: "38%" }}>The Story</h1>
          <img src={highlight} />
        </div>
      </div>
      <img src={rocket} style={{ width: "20%", alignSelf: "flex-start" }} />
    </>
  );
}
