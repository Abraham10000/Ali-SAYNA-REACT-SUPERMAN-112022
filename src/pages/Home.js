import React from 'react'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'
import img6 from '../assets/images/img6.png'
import img7 from '../assets/images/img7.png'
import img8 from '../assets/images/img8.png'
import img9 from '../assets/images/img9.png'
import img10 from '../assets/images/img10.png'
import img15 from '../assets/images/img15.png'
import img12 from '../assets/images/img12.png';
import Polygon from '../assets/icones/Polygon.png'
import Polygon1 from '../assets/icones/Polygon-1.png'
import player from '../assets/icones/icon_player.png'
import guillemets from '../assets/icones/icon_guillemets_1.png'
import guillemets1 from '../assets/icones/icon_guillemets_2.png'
import bataille from '../assets/images/img11.png'
import team from '../assets/images/img16.png'
import MultimediaComponent from '../components/multimedia'

function Home() {
    return (
        <>
            <section className="superman-cinema">
                <div className="container">
                    <div className="cinema-title">
                        <h3>SUPERMAN AU CINÉMA</h3>
                    </div>
                    <div className="cinema-content">
                        <p>Dans la version actuelle de son histoire, Superman est né sur la planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut placé dans un vaisseau spatial par son père, le scientifique Jor-El, et sa mère, Lara, car la planète était sous la menace d'une destruction totale. Le vaisseau quitta Krypton juste avant l'explosion fatidique... Au terme d'un très long voyage, il atterrit sur la planète Terre. Kal-El est trouvé par un couple de fermiers de Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas d'enfant, décident alors de l'adopter et de garder le secret sur son origine. Kal-El est rebaptisé « Clark Joseph Kent » et grandit entouré de ses amis Lana Lang (son premier amour) et Pete Ross jusqu'à ce que ses pouvoirs se révèlent à lui au moment de son adolescence. Jeune adulte, Clark décide de s'installer à Metropolis pour devenir journaliste. Il y est engagé par Perry White, le rédacteur en chef du Daily Planet. Pour sauver les personnes qui lui sont chers ainsi que les habitants de la Terre, Clark revêt son costume et devient Superman, l’homme d’acier aux yeux du monde.</p>
                    </div>
                    <div className="row superman-personnage">
                        <div className="col-md-4 avatar">
                            <img src={img2} alt="superman2 avatar" />
                        </div>
                        <div className="col-md-4 avatar">
                            <img src={img3} alt="superman3 avatar" />
                        </div>
                        <div className="col-md-4 avatar">
                            <img src={img4} alt="superman4 avatar" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="nemesis">
                <div className="container">
                    <div className="nemesis-title">
                        <h3>NÉMÉSIS</h3>
                    </div>
                    <div className="nemesis-content">
                        <p>Superman mène une lutte sans fin contre de nombreux adversaires, son adversaire le plus connu étant le milliardaire Lex Luthor, fils de Lionel Luthor, qui déteste tout ce qu'incarne Superman et finira notamment par devenir président des États-Unis, ce qui participera à faire de lui le pire ennemi de Clark. Doomsday, une abomination génétique qui souhaite tout détruire sur son passage, sera celui qui réussira à tuer Superman. Zod est un kryptonien qui fut condamné à l'emprisonnement dans la Zone Fantôme pour s'être insurgé contre les autorités. Il est libéré et vient sur Terre pour la conquérir mais est arrêté par Superman. Étant kryptonien, Zod possède les mêmes pouvoirs que Superman, et constitue donc l'un de ses plus dangereux adversaires.</p>
                    </div>
                    <div className="row nemesis-personnage">
                        <div className="col-lg-4 avatar">
                            <img src={img5} alt="superman5 avatar" />
                        </div>
                        <div className="col-lg-4 avatar">
                            <img src={img6} alt="superman6 avatar" />
                        </div>
                        <div className="col-lg-4 avatar">
                            <img src={img7} alt="superman7 avatar" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="allies-section">
                <div className="container">
                    <div className="allies-title">
                        <h3>ALLIES</h3>
                    </div>
                    <div className="allies-content">
                        <p>Jor-El était le père biologique de Kal-El, ainsi que le savant le plus célèbre de Krypton et un membre influent du Conseil des Sciences. Lorsque Krypton s’effondre il place une version impuissante de lui même dans le vaisseau emportant Kal-El vers la Terre afin de lui apporter les réponses à ses questions quand il grandira. Sur Terre Clark est pris en charge par Jonathan et Martha Kent qui l’élèvent comme leur propre fils. Lorsque John sera mort, Clark pourra compter sur le soutien indéféctible de sa mère. Une fois engagé au Daily Planet, il rencontrera Loïs Lane qui deviendra sa partenaire et son seul “véritable amour”</p>
                    </div>
                    <div className="row allies-personnage">
                        <div className="col-lg-4 avatar">
                            <img src={img8} alt="superman8 avatar" />
                        </div>
                        <div className="col-lg-4 avatar">
                            <img src={img9} alt="superman9 avatar" />
                        </div>
                        <div className="col-lg-4 avatar">
                            <img src={img10} alt="superman10 avatar" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bataille-section">
                <div className="container">
                    <img src={bataille} alt="img11" />
                    <div className="bataille-title">
                        <h3>BATMAN V SUPERMAN</h3>
                    </div>
                    <div className="bataille-content">
                        <p>Le monde n’est pas assez grand pour deux super héros. Alors que Superman se battait contre Zod, l’affrontement fait des dégats et détruit partiellement la ville de Métropolis. Bruce Wayne alors présent dans la ville assiste, impuissant, à l’effondrement de la ville qui fait beaucoup de victimes. Wayne est alors persuadé que Superman causera un jour la perte de l'Humanité et qu'il est inévitable de se préparer à l'éliminer. Devenu méfiant il se demande si l'homme de fer, cet extraterrestre de Krypton, qui peut à lui seul détruire le monde d'une simple pichenette, décidera un jour de ne plus défendre la Terre, voire même de causer sa perte.</p>
                        <p>De son côté Superman d’une part cherche à se défendre mais retourne l’offensive contre Batman. Ce dernier n'est plus que l'ombre de lui-même. Devenu un justicier impitoyable, mégalomane et cruel à la suite du meurtre de son ancien partenaire Robin par le Joker, il n'hésite plus à violer son code moral en éliminant et marquant au fer les criminels. Superman souhaite simplement lui rappeler le code moral des “justicier” en usant de la force s’il le faut pour que Batman cesse son comportement abusif.</p>
                    </div>
                </div>
            </section>
            <section className="multimedia-section">
                <div className="container">
                    <div className="multimedia-title">
                        <h3>MULTIMÉDIA</h3>
                    </div>
                    <div className="multimedia-content">
                        <div class="icon-button-prev">
                            <img src={Polygon1} alt="polygon" />
                        </div>
                        <div className="multimedia-card">                            
                            <div className="card-icon">
                                <img src={img12} alt="multimedia icon" />
                            </div>
                            <div className="card-content">
                                <h4>Action, Adventure</h4>
                                <h5>Superman Man of Steel</h5>
                                <span>IMDB:<small> 7.1</small></span>
                                <p>Clark Kent, malgré son apparence humaine normale, est l'un des derniers membres d'une race éteinte. Il se retrouve forcé de révéler son identité lorsque la Terre est envahie par une armée de survivants qui menacent de détruire la planète.</p>
                            </div>                            
                        </div>
                        <MultimediaComponent />                        
                    </div>
                    <div className="multimedia-bande-annonce">
                        <img src={img15} alt="bande annonce" title="Bande annonce original de Superman sur Youtube" />
                        <a href="" target="_blank">
                            <img src={player} alt="btn player" />   
                        </a>
                    </div>
                </div>
            </section>
            <div className="contact-section" id="contact">
                <div className="container">
                    <img src={team} alt="img16" />
                    <div className="contact-title">
                        <h3>PRENONS CONTACT</h3>
                    </div>
                    <div className="contact-content">
                        <form className="contact-form" action="">
                            <label for="mail" class="input">ADRESSE EMAIL</label>
                            <input type="email" name="email" id="email" class="form-control" required placeholder="Adresse email" />
                            <label for="newsletter" class="input">NEWSLETTER</label>
                            <p>
                                <label className="form-check-label" for="customCheck">En cochant cette case vous acceptez de recevoir l’actualité concernant les aventures de
                                Superman :</label>
                                <input type="checkbox" class="form-check-input" id="customCheck" />
                            </p>
                            <div className="select">
                                <select for="newsletter" id="newsletter" name="dropdownlist">
                                    <option selected="selected">Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter</option>
                                    <option className="c-bg" value="Quotidiennement">Une fois par semaine</option>
                                    <option className="c-bg" value="hebdomadaire">Une fois toute les deux semaines (2 fois par mois)</option>
                                    <option className="c-bg" value="Mensuel">Une fois par mois</option>
                                    <option className="c-bg" value="annuel">Une fois tous les trois mois</option>
                                    <option className="c-bg" value="annuel">Une fois tous les six mois</option>
                                </select>
                            </div>
                            <div className="news">Souhaitez vous recevoir des news</div>
                            <div className="boutton-group">
                                <input type="radio" name="choix" id="film" />
                                <label className="btnform" for="film">Des films</label>
                                <input type="radio" name="choix" id="comics" />
                                <label className="btnform" for="comics">Des comics</label>
                                <input type="radio" name="choix" id="tout" />
                                <label className="btnform" for="tout">De tout</label>
                            </div>
                            <span className="input">MESSAGE</span>
                            <textarea name="message" id="message" placeholder="Laissez un commentaire pour la communauté"></textarea>
                            <div className="form-result" id="validator-newsletter">
                                <button type="submit" className="default-btn">CONFIRMER<span></span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="footer" id="citation">
                <div className="container">
                    <div className="single-citation-widget">                    
                        <div className="icon-guillemets-ouvrant">
                            <img src={guillemets} alt="icon guillemets" />
                        </div>
                        <div className="citation-content">
                            <div className="text">
                                <p>- Que représente le S ?
                                <br />
                                    - Ce n’est pas un S. Sur ma planète cela signifie espoir.
                                </p>
                            </div>
                            <div className="auteur">
                                <p className="pt-3"><small>Man Of Steel, Lois Lane et Clark Kent</small></p>
                            </div>
                            <div className="icon-separation">
                                <figure className="circle"></figure>
                                <figure className="circle"></figure>
                                <figure className="circle"></figure>
                                <figure className="circle"></figure>
                                <figure className="circle-plein"></figure>
                                <figure className="circle"></figure>
                                <figure className="circle"></figure>
                                <figure className="circle"></figure>
                                <figure className="circle"></figure>
                            </div>
                        </div>
                        <div className="icon-guillemets-fermant">
                            <img src={guillemets1} alt="icon guillemets" />
                        </div>
                    </div>
                </div>
            </div>           
        </>
            )
        }
        
        export default Home
