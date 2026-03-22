import { useNavigate } from 'react-router';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useThunk = (thunk, options) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dispatchThunk = useCallback(
    async (args) => {
      dispatch(thunk(args))
        .unwrap()
        .then(() => {
          if (options) {
            const { successRedirectRoute } = options;

            if (successRedirectRoute) {
              navigate(successRedirectRoute);
            }
          }
        })
        .catch((e) => {
          return setError(e);
        });
    },
    [dispatch, thunk, navigate, options],
  );

  return [dispatchThunk, error];
};
