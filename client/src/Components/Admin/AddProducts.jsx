import React from 'react'

const AddProducts = () => {
  return (
        <div class="container mt-5 mb-5 d-flex justify-content-center">
            <div class="card px-1 py-4">
                <div class="card-body">
                    <h6 class="information mt-4 d-flex justify-content-center">Creación de producto:</h6>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                {/* <!-- <label for="name">Name</label> --> */}
                                <label for="name">Nombre del producto</label>
                                <input class="form-control" type="text" placeholder="Nombre"/>
                            </div>
                        </div>
                    </div><br/>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                            <label for="name">Precio</label>
                                <div class="input-group">
                                    <input class="form-control" type="text" placeholder="Precio"/>
                                </div>
                            </div>
                        </div>
                    </div><br/>
                        <label for="name">Tipo</label>
                        <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                            <option value="" selected disabled style={{color:"gray"}}>--Tipo--</option>
                            <option >Request Invoice for order</option>
                            <option >Request order status</option>
                            <option >Haven't received cashback yet</option>
                            <option >Other</option>
                        </select><br/>
                        <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                            <label for="name">Talle</label>
                                <div class="input-group">
                                    <input class="form-control" type="text" placeholder="Talle"/>
                                </div>
                            </div>
                        </div>
                    </div><br/>
                    <label for="name">Temporada</label>
                        <div class="d-flex flex-row">
                            <label class="radio mr-1" style={{paddingRight:"8px"}}>
                                <input type="radio" name="temporada" value="Verano" style={{scale:"1.5"}} checked/>
                                <span>
                                    <i class="fa fa-user"></i> Verano
                                </span>
                            </label>
                            <label class="radio">
                                <input type="radio" name="temporada" value="Invierno" style={{scale:"1.5"}}/>
                                <span>
                                    <i class="fa fa-plus-circle"></i> Invierno
                                </span>
                            </label>
                        </div><br/>
                        <label for="name">Genero</label>
                        <div class="d-flex flex-row">
                            <label class="radio mr-1" style={{paddingRight:"8px"}}>
                                <input type="radio" name="Genero" value="Hombre" style={{scale:"1.5"}} checked/>
                                <span>
                                    <i class="fa fa-user"></i> Hombre
                                </span>
                            </label>
                            <label class="radio">
                                <input type="radio" name="Genero" value="Mujer" style={{scale:"1.5"}}/>
                                <span>
                                    <i class="fa fa-plus-circle"></i> Mujer
                                </span>
                            </label>
                        </div><br/>
                        <label for="name">Edad</label>
                        <div class="d-flex flex-row">
                            <label class="radio mr-1" style={{paddingRight:"8px"}}>
                                <input type="radio" name="Edad" value="Adulto" style={{scale:"1.5"}} checked/>
                                <span>
                                    <i class="fa fa-user"></i> Adulto
                                </span>
                            </label>
                            <label class="radio">
                                <input type="radio" name="Edad" value="Niño" style={{scale:"1.5"}}/>
                                <span>
                                    <i class="fa fa-plus-circle"></i> Niño
                                </span>
                            </label>
                        </div>
                   {/*  <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                            <label for="name">Name</label>
                                <div class="input-group">
                                    <input class="form-control" type="text" placeholder="asd"/>
                                </div>
                            </div>
                        </div>
                    </div><br/> */}
                        <div class="d-flex flex-column text-center px-5 mt-3 mb-3">
                        <small class="agree-text">By Booking this appointment you agree to the</small>
                        <a href="#" class="terms">Terms & Conditions</a>
                    </div>
                    <button class="btn btn-primary btn-block confirm-button">Confirm</button>
                </div>
            </div>
        </div>
  )
}

export default AddProducts
