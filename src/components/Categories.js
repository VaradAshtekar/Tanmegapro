import React from "react";
import { CategoryCards } from "./CategoryCards";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
export const Categories = () => {
    var list_medical = [{ title: "Medical emergency", money_raised: 1200, money_donated: 1000, org: "A", desc: "..." }, { title: "Medical emergency", money_raised: 1200, money_donated: 1000 }];
    var list_education = [{ title: "Education emergency", money_raised: 1200, money_donated: 1000 }];
    var list_hunger = [{ title: "Hunger emergency", money_raised: 1200, money_donated: 1000 }, { title: "Hunger emergency", money_raised: 1200, money_donated: 1000 }, { title: "Hunger emergency", money_raised: 10000, money_donated: 1000 }];
    var list_disaster = [{ title: "Disaster relief", money_raised: 1200, money_donated: 1000 }];
    var list_animal = [{ title: "Animal care", money_raised: 1200, money_donated: 1000 }, { title: "Animal care", money_raised: 1600, money_donated: 1000 }];

    return (
        <>
            <Router>

                <div className="container">
                    <div className="categoricdisplay">
                        <Link to="/medical"><div className="category">
                            <i class="fa fa-heartbeat fa-4x" aria-hidden="true"></i>
                            <p> Medical</p>
                        </div></Link>

                        <Link to="/hunger"><div className="category">
                            <i class="fa  fa-cutlery fa-4x" aria-hidden="true"></i>
                            <p>Hunger</p>
                        </div></Link>

                        <Link to="/animals"><div className="category">
                            <i class="fa fa-plus-square fa-4x" aria-hidden="true"></i>
                            <p>Animal Care</p>

                        </div></Link>

                        <Link to="/disaster"><div className="category">
                            <i class="fa fa-anchor fa-4x" aria-hidden="true"></i>
                            <p>Disaster</p>
                        </div></Link>

                        <Link to="/education"><div className="category">
                            <i class="fa fa-graduation-cap fa-4x" aria-hidden="true"></i>
                            <p>Education</p>

                        </div></Link>
                    </div>
                </div>
                <Routes>

                    <Route path="/medical" element={<CategoryCards displaylist={list_medical} />}>

                    </Route>
                    <Route path="/hunger" element={<CategoryCards displaylist={list_hunger} />}>

                    </Route>
                    <Route path="/disaster" element={<CategoryCards displaylist={list_disaster} />}>

                    </Route>
                    <Route path="/education" element={<CategoryCards displaylist={list_education} />}>

                    </Route>
                    <Route path="/animals" element={<CategoryCards displaylist={list_animal} />}>

                    </Route>
                </Routes>
            </Router>
        </>
    )
}

