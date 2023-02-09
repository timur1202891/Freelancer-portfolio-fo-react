import gitHubIcon from "./gitHub-black.svg"
const BtnGitHib = ({link}) => {
	return ( 
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
		<img src={gitHubIcon} alt=""/>
		GitHub repo
  </a>
	 );
}
 
export default BtnGitHib;