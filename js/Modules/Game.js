export default class Game {
    constructor(obj){
        this.id = obj.id;
        this.title = obj.title;
        this.short_description = obj.short_description;
        this.genre = obj.genre;
        this.platform = obj.platform;
        this.thumbnail = obj.thumbnail;
    }

    gameCard(){
        return `<div class='col-3 pb-3'>
                    <div class="card bg-transparent h-100 position-relative">
                        <div class="card-header p-3 border-0">
                            <img src="${this.thumbnail}" class="card-img-top" alt="${this.title} image">
                        </div>
                        <div class="card-body text-white py-0 pb-3">
                            <h5 class="card-title small">${this.title}<span class="badge bg-primary p-2 float-end">Free</span></h5>
                            <p class="card-text small text-secondary">${this.short_description}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <span class="badge bg-secondary">${this.genre}</span>
                            <span class="badge bg-secondary">${this.platform}</span>
                        </div>
                            <a href="#" onclick="displayGameDetail(${this.id})" class="game-details-link stretched-link"></a>
                    </div>
                </div>`;
    }
}