import { Grid } from '@mui/material';

const ItemTarefa = (props) => {

  return (
    <>
      <Grid item >
        <div>
          <ul style={{ listStyle: 'none', padding: '12px' }}>
            <li>
              <label>
                <input
                  type="checkbox"
                  id={props.indice}
                  value={props.tasks.title}
                  onChange={props.change}
                  
                />
                {`${props.tasks.title}`}
              </label>
            </li>
          </ul>
        </div>
      </Grid>
    </>
  );
};
export default ItemTarefa;
