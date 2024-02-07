import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function PageNotFound() {
  return (
<>

				<div id="banner-wrapper">
					<div id="banner" className="box container">
						<div className="row">
							<div className="col-7 col-12-medium">
								<h2><FontAwesomeIcon icon={faCircleExclamation}/> Page Not Found </h2>
								<p>It's a free responsive site template by HTML5 UP</p>
							</div>
							<div className="col-5 col-12-medium">
								<ul>
									<li><Link to='/' className="button large icon solid fa-home">Return Home</Link></li>

								</ul>
							</div>
						</div>
					</div>
				</div>

        </>
  );
}

export default PageNotFound;
