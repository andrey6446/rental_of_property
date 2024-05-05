const React = require('react');
const Layout = require('./Layout');
const RentCard = require('./RentCard');

function MainPage({
  title, user, rents, categories,
}) {
  const catNames = categories.map((el) => el.name);
  const filteredCategories = [...new Set(catNames)];
  return (
    <Layout title={title} user={user}>
      {user && user.isAdmin && (
      <form
        action='/api/add'
        method='post'
        className='needs-validation column mt-3 addCategory'
        noValidate
      >
        <div className='col-md-4 mx-auto'>
          <label htmlFor='validationCustom01' className='form-label'>Название</label>
          <input type='text' className='form-control' id='validationCustom01' name='title' required />
          <div className='invalid-feedback'>
            Пожалуйста, введите название жилья
          </div>
        </div>
        <div className='col-md-4 mx-auto'>
          <label htmlFor='validationCustom02' className='form-label'>Описание</label>
          <input type='text' className='form-control' id='validationCustom02' name='description' required />
          <div className='invalid-feedback'>
            Пожалуйст введите описание жилья
          </div>
        </div>
        <div className='col-4 mx-auto'>
          <label htmlFor='validationCustom03' className='form-label'>Категория</label>
          <input type='text' className='form-control' id='validationCustom03' name='category' required />
          <div className='invalid-feedback'>
            Пожалуйста выберите катеогорию жилья
          </div>
        </div>
        <div className='col-4 mx-auto'>
          <label htmlFor='validationCustom03' className='form-label'>Фотография</label>
          <input type='file' className='form-control' id='validationCustom03' name='images' required />
          <div className='invalid-feedback'>
            Пожалуйста выберите фотографии для жилья
          </div>
        </div>
        <div className='col-4 mx-auto'>
          <label htmlFor='validationCustom04' className='form-label'>Цена</label>
          <input type='number' className='form-control' id='validationCustom03' name='price' required />
          <div className='invalid-feedback'>
            Пожалуйста введите цену жулья
          </div>
        </div>
        <div className='col-4 mx-auto'>
          <label htmlFor='validationCustom04' className='form-label'>Локация</label>
          <input type='text' className='form-control' id='validationCustom03' name='location' required />
          <div className='invalid-feedback'>
            Пожалуйста укажите геолокацию
          </div>
        </div>
        <div className='col-md-4 mx-auto text-center'>
          <button className='btn btn-primary btn-auth' type='submit'>Добавить жилье</button>
        </div>
      </form>
      )}
      <select className='form-select mx-auto' aria-label='Default select example'>
        <option defaultValue>Все виды жилья</option>
        {filteredCategories.map((el) => (<option value={el} key={el}>{el}</option>))}
      </select>
      <div className='rents-container flex-wrap justify-content-around'>
        {rents.map((rent) => (
          <RentCard rent={rent} key={rent.id} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = MainPage;
