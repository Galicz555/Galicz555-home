import { Pirate } from './pirates'

class Ship {
	private _captain: Pirate;
	private _crew: Pirate[];


	constructor(Captain?: Pirate, Crew?: Pirate[]) {
		this._captain = Captain;
		if (Crew) {
			this._crew = Crew;
		} else {
			this._crew = [];
		}
	}

	public fillShip(x: string): void {
		let k: number = Math.round(Math.random() * 69);
		this._captain = new Pirate(x);
		for (let i = 0; i < k; i++) {
			this._crew.push(new Pirate());
		}
	}

	public get captain(): Pirate {
		return this._captain;
	}

	public get crew(): Pirate[] {
		return this._crew;
	}

	public stillAlive(): void {
		let alive = 0;
		for (let i = 0; i < this._crew.length; i++) {
			if (this._crew[i].alive == true) {
				++alive;
			}
		}
		console.log(alive + " of you crew is still alive." );
	}

	public shipStatus(){
		console.log("Captain: ", this._captain);
		this.stillAlive(); 
	}

	public battle(){
	let thisShipsCalculatedScore: number = this._captain.intoxicatidness + ;
	// let enemyShipsCalculatedScore: number = ;


		// if(thisShipsCalculatedScore > enemyShipsCalculatedScore){

		// }
		// if(thisShipsCalculatedScore < enemyShipsCalculatedScore){

		// }
	}
}

let blackPearl = new Ship();
blackPearl.fillShip("Jack Sparrow");
blackPearl.shipStatus();
