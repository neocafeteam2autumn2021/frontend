import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Column } from 'simple-flexbox';
import LoadingComponent from '../../components/loading/LoadingComponent';
// import { signout } from '../../redux/actions/userActions';
import SearchInput from '../../components/etc/SearchInput';
import TabsMenu from '../../components/tabsMenu/TabsMenu';
import { getMenuCategories, getMenuFoods } from '../../redux/actions/menuActions';

function MainMenuComponent() {

  const menuCategories = useSelector((state) => state.menuCategories);
  const { loadingMenuCategories, menuCategoriesData, errorMenuCategories } = menuCategories;

  const menuFoods = useSelector((state) => state.menuFoods);
  const { loadingMenuFoods, menuFoodsData, errorMenuFoods } = menuFoods;

  const dispatch = useDispatch();

  useEffect(() => {
    if(menuCategoriesData) {
      dispatch(getMenuFoods(menuCategoriesData));
    }
  }, [dispatch, menuCategoriesData]);

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
                  <SearchInput />
                  <TabsMenu menuCategories={menuCategoriesData ? menuCategoriesData : null}
                    menuFoods={menuFoodsData ? menuFoodsData : null} />
              </>
            )}
        </Column>
    );
}

export default MainMenuComponent;