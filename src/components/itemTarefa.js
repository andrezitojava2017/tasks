import { Grid } from '@mui/material';

const ItemTarefa = (props) => {
  const test = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Grid item>
        <div>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="itemTarefa"
                  id="item1"
                  value="Item 1"
                  onChange={test}
                />
                ITEM 1
              </label>
            </li>

            <li>
              <input
                type="checkbox"
                name="itemTarefa"
                id="item2"
                value="Item 2"
                onChange={test}
              />
              <span>ITEM 2</span>
            </li>
          </ul>
        </div>
      </Grid>
    </>
  );
};
export default ItemTarefa;
