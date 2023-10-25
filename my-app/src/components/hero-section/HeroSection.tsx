import classes from "./HeroSection.module.css";

export const HeroSection = () => {
	return (
		<>
			<img src="/home-page/shape.svg" alt="shape" className={classes.shape} />
			<h1 className={classes.title}><span>Metamorphix</span> Нетворкинг <span>в</span> твоем кармане</h1>
		</>
	);
};