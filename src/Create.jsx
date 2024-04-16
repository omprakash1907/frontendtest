import React from 'react'

const Create = () => {
    return (

        <>
            <section className='create mt-5'>
                <div className="container">
                    <h2 className='text-center fw-bold font-sz'>Create Receipies</h2>
                    <p className='text-center fw-bold fs-5'></p>
                    <div className="col-8 m-auto">
                        <form action="/upload" method="post" class='shadow-lg rounded p-4 bg-light ' onsubmit="return validateForm(this)" enctype="multipart/form-data">
                            <div class="d-flex justify-content-between align-items-center">
                                <label htmlFor="" class='fw-bold my-2 lightslategrey'>Title : </label>
                                <span class='text-danger fs-6 fw-bold' id="titleError"></span>
                            </div>
                            <input type="text" class='w-100 form-control' placeholder="Recipes Title" name='title' />

                            <div class="d-flex justify-content-between align-items-center">
                                <label htmlFor="" class='fw-bold my-2 lightslategrey'>Description : </label>
                                <span class='text-danger fs-6 fw-bold' id="descriptionError"></span>
                            </div>
                            <textarea name="description" id="" class="w-100 form-control" cols="30" rows="3" placeholder="Recipes Description"></textarea>

                            <div class="d-flex justify-content-between align-items-center">
                                <label for="" class="fw-bold my-2 lightslategrey">Recipes's Image :</label>
                                <span class="text-danger fs-6 fw-bold" id="picError"></span>
                            </div>
                            <input type="file" name="file" class="form-control"></input>
                            <div class="text-center mt-3">
                                <button class='btn btn-white border border-dark text-secondary rounded w-100'>Post Recipes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Create