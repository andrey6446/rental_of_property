const React = require('react');
const Layout = require('./Layout');

function RentUpdatePage({ title, user, rent }) {
  return (
    <Layout title={title} user={user}>
      <form
        action={`/api/update/${rent.id}/update`}
        method='put'
        className='needs-validation column mt-3 updateCategory'
        noValidate
      >
        <div className='col-md-4 mx-auto'>
          <label htmlFor='validationCustom01' className='form-label'>Название</label>
          <input type='text' className='form-control' id='validationCustom01' name='title' required value={rent.title} />
          <div className='invalid-feedback'>
            Пожалуйста, введите название жилья
          </div>
        </div>
        <div className='col-md-4 mx-auto'>
          <label htmlFor='validationCustom02' className='form-label'>Описание</label>
          <textarea name='description' id='validationCustom02' className='form-control' cols='30' rows='10' value={rent.description} />
          <div className='invalid-feedback'>
            Пожалуйст введите описание жилья
          </div>
        </div>
        <div className='col-4 mx-auto'>
          <label htmlFor='validationCustom03' className='form-label'>Категория</label>
          <input type='text' className='form-control' id='validationCustom03' name='category' required value={rent.Category.name} />
          <div className='invalid-feedback'>
            Пожалуйста выберите катеогорию жилья
          </div>
        </div>
        <div className='col-4 mx-auto'>
          <label htmlFor='validationCustom03' className='form-label'>Фотография</label>
          <input type='file' className='form-control' id='validationCustom03' name='images' required value={rent.images} />
          <div className='invalid-feedback'>
            Пожалуйста выберите фотографии для жилья
          </div>
        </div>
        <div className='col-4 mx-auto'>
          <label htmlFor='validationCustom04' className='form-label'>Цена</label>
          <input type='number' className='form-control' id='validationCustom03' name='price' required value={rent.price} />
          <div className='invalid-feedback'>
            Пожалуйста введите цену жулья
          </div>
        </div>
        <div className='col-4 mx-auto'>
          <label htmlFor='validationCustom04' className='form-label'>Локация</label>
          <input type='text' className='form-control' id='validationCustom03' name='location' required value={rent.location} />
          <div className='invalid-feedback'>
            Пожалуйста укажите геолокацию
          </div>
        </div>
        <div className='col-md-4 mx-auto text-center'>
          <button className='btn btn-primary btn-auth' type='submit'>Изменить жилье</button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = RentUpdatePage;
