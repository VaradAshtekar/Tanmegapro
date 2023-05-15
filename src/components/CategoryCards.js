import React from "react";
import { Cards } from "./Cards";

export const CategoryCards = ({ displaylist }) => {
    console.log(displaylist.length);

    return (<>
        <div className="carddisplay">
            {displaylist.map((comp) => {
                return (
                    <div class="card" Style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{comp.title}</h5>
                            <p class="card-text">Donated by</p>
                            <p class="card-text"> {comp.money_donated} out of {comp.money_raised} amount paid</p>
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar" Style="width: 25%"></div>
                            </div>
                            <p class="card-text"> Days left</p>

                            <a href="#" class="btn btn-primary">Donate Now</a>
                        </div>
                    </div>
                )
            })
            }
        </div>
    </>)
}



