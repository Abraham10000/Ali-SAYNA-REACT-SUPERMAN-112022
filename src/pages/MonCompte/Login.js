import React from 'react'

function Login() {
    return (
        <>
         <div className="login-section" id="login">
                <div className="container">
                    <div className="login-title">
                        <h2>Insription</h2>
                        <p>Vous avez déjà un compte ? Connectez vous ici</p>
                    </div>
                    <div className="login-content">
                        <form className="validation-form" action="">
                            <div class="mb-3">
                                <label class="form-label" for="validationname">NOM</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Nom" required/>                                
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="validationusername">PRENOM</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Prenom" required/>                                
                            </div>
                            <div class="mb-3">
                                <label class="input" for="validationmail">IDENTIFIANT</label>
                                <input type="email" name="email" id="email" class="form-control" required placeholder="Email"/>
                            </div>
                            <div class="mb-3">
                                <label class="input" for="validationpassword">MOT DE PASSE</label>
                                <input type="mdp" name="password" id="email" class="form-control" required placeholder="Mot de passe"/>
                            </div>
                            <div class="mb-3">
                                <label class="input" for="validationpassword">CONFIRMER VOTRE MOT DE PASSE</label>
                                <input type="mdp" name="password" id="email" class="form-control" required placeholder="Confirmation du mot de passe"/>
                            </div>

                            <div class="mb-3">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="invalidCheck" required />
                                    <label class="form-check-label form-label" for="invalidCheck">Je reconnais avoir pris connaissance et j’accepte les termes des conditions générales d’utilisation.</label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary" type="submit">VALIDER</button>
                        </form>             
                    </div>				
                </div>
            </div>                  
        </>
    )
}

export default Login
