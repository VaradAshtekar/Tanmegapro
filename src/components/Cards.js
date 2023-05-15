import React from "react";

export const Cards = ({ title, money_donated, money_raised }) => {

    return (


        <>
            <h1>Hi</h1>

            <div class="card" Style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">Donated by</p>
                    <p class="card-text"> {money_donated} out of {money_raised} amount paid</p>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" Style="width: 25%"></div>
                    </div>
                    <p class="card-text"> Days left</p>

                    <a href="#" class="btn btn-primary">Donate Now</a>
                </div>
            </div>
        </>

    )
}


