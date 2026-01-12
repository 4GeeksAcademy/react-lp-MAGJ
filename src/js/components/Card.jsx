import React from "react";
function Card (){
    const cardimg=[

        {
        img:"https://picsum.photos/seed/picsum/200/300",
        cardTitle:"Card 1",
        cardBody:"Little landscape",
        buttonLabel:"Find More Here"
        },
           {
        img:"https://picsum.photos/200/300?grayscale",
        cardTitle:"Card 1",
        cardBody:"Special Sparkles",
        buttonLabel:"Find More Here"
        },
           {
        img:"https://picsum.photos/200/300/?blur=3",
        cardTitle:"Card 1",
        cardBody:"Blurry Pic",
        buttonLabel:"Find More Here"
        },
           {
        img:"https://picsum.photos/id/237/200/300",
        cardTitle:"Card 1",
        cardBody:"Cute little dog",
        buttonLabel:"Find More Here"
        }

    ];



return (
		<div className="container">
			<div className="row">
				{cardimg.map((card, index) => (
					<div className="col-md-3" key={index}>
						<div class="card" >
							<img src={card.img} alt="" className="card-img-top" />
							<div class="card-body">
								<h5 class="card-title">{card.cardTitle}</h5>
								<p class="card-text">{card.cardBody}</p>
								<a href="#" class="btn btn-primary">{card.buttonLabel}</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)

}

export default Card