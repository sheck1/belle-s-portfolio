
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';


const About = () => {

return (
<div className="row title-sub">
    <div className="col">
      <PeopleAltOutlinedIcon sx={{ fontSize: 50 }} />
        <p>For All Skintypes</p>
    </div>
    <div className="col">
        <ScienceOutlinedIcon sx={{ fontSize: 50 }} />
        <p>Hydroquinone Free</p>
    </div>
    <div className="col">
    <SpaOutlinedIcon sx={{ fontSize: 50 }} />
        <p>Natural Ingredients</p>
    </div>
  </div>

);

}


export default About;
