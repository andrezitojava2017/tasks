import { Grid } from '@mui/material';

const ItemTarefa = (props) => {
  const test = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Grid item>
        <div>
          <ul style={{ listStyle: 'none', padding: '12px' }}>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="itemTarefa"
                  id="item1"
                  value="Item 1"
                  onChange={test}
                />
                ITEM 1ssssssssssssssssssss
              </label>
            </li>

          </ul>
        </div>
      </Grid>
    </>
  );
};
export default ItemTarefa;
