export const SAVE_USER_INFO = "SAVE_USER_INFO";
export const DELETE_USER_INFO = "DELETE_USER_INFO";

export const saveUserInfo = (
  budget,
  email,
  family,
  firstname,
  id,
  lastname,
  level,
  quests,
  wallet 
) => ({
  type: SAVE_USER_INFO,
  budget,
  email,
  family,
  firstname,
  id,
  lastname,
  level,
  quests,
  wallet 
});

export const deleteUserInfo = () => ({
  type: DELETE_USER_INFO,
});
