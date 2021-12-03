import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Column } from 'simple-flexbox';
import LoadingComponent from '../../components/loading/LoadingComponent';
import SearchInput from '../../components/etc/SearchInput';
import TabsMenu from '../../components/tabsMenu/TabsMenu';
import { getMenuCategories, getMenuFoods } from '../../redux/actions/menuActions';
import { refreshToken } from '../../redux/actions/userActions';
import Toast from '../../components/toast/Toast';

function MainMenuComponent() {

  const [list, setList] = useState([]);

  const menuCategories = useSelector((state) => state.menuCategories);
  const { loadingMenuCategories, menuCategoriesData, errorMenuCategories } = menuCategories;

  const menuFoods = useSelector((state) => state.menuFoods);
  const { loadingMenuFoods, menuFoodsData } = menuFoods;

  const dispatch = useDispatch();

  useEffect(() => {
    if(menuCategoriesData) {
      dispatch(getMenuFoods(menuCategoriesData));
    } else if(errorMenuCategories && errorMenuCategories.toString().indexOf("401") !== -1) {
      const { refresh } = JSON.parse(localStorage.getItem('userInfo'));
      dispatch(refreshToken(refresh));
      dispatch(getMenuCategories());
    } else if(errorMenuCategories) {
      setList([...list, {id: 1, title: 'Ошибка', description: errorMenuCategories.toString(), type: "error"}])
    }
  }, [dispatch, menuCategoriesData, errorMenuCategories, list]);

  useEffect(() => {
    dispatch(getMenuCategories());
  }, [dispatch]);

    return (
        <Column
          horizontal='center'>
            {(loadingMenuCategories || loadingMenuFoods) ? (
              <LoadingComponent loading />
            ) : (
              <>
                  <Toast toastList={list} />
                  <SearchInput />
                  <TabsMenu menuCategories={menuCategoriesData ? menuCategoriesData : null}
                    menuFoods={menuFoodsData ? menuFoodsData : null} />
              </>
            )}
        </Column>
    );
}

export default MainMenuComponent;