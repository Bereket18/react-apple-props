// import { Link } from "react-router-dom";
import Main from "../Main";
import "../../css/bootstrap.css";
function Four04() {
	return (
		<div>
			<section className="internal-page-wrapper">
				<div className="container">
					<div className="row h-100 align-items-center justify-content-center text-center">
						<div className="col-12 mt-5">
							<h1 className="font-weight-bold">
								404 <br />
								The page you’re looking for can’t be found!!!
								<br />
								Would you Like To Go Back To The Main Page? <br />
								<button type="submit" className="btn btn-dark" id="newFormBtn">
									<a href={<Main />}>Main</a>
								</button>
							</h1>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Four04;
