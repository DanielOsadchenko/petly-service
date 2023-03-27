import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoResult from 'components/Generic/NoResult/NoResult';
import Loader from 'components/Loader';
import Friend from './OurFriends';
import { List, Item } from './OurFriends.styled';
import {
  selectFriends,
  selectError,
  selectLoadingStatus,
} from 'redux/friends/selectors';
import fetchFriends from 'redux/friends/operations';

const FriendsList = () => {
  const isLoading = useSelector(selectLoadingStatus);
  const friends = useSelector(selectFriends);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  // console.log(friends)

  return (
    <List>
      {error && <NoResult />}
      {isLoading && <Loader />}
      {friends.length > 0 &&
        friends.map(friend => (
          <Item key={friend._id}>
            <Friend friend={friend} />
          </Item>
        ))}
    </List>
  );
};

export default FriendsList;

// data-aos="zoom-in"
