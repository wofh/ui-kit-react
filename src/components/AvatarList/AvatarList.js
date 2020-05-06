import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Avatar, sizes } from '../Avatar';
import { color, typography } from '../../shared/styles';
import { glow } from '../../shared/animation';

const marginOffset = {
  tiny: -4,
  small: -6,
  medium: -12,
  large: -18,
};

const UserAvatar = styled(Avatar)`
  box-shadow: ${color.lightest} 0 0 0 2px;
  display: block;
  animation: none;
`;

const UserEllipses = styled.li`
  display: inline-flex;
  font-size: ${typography.size.s1}px;
  color: ${color.mediumdark};
  margin-left: 6px;
  white-space: nowrap;
`;

const User = styled.li`
  display: inline-flex;
`;

const Users = styled.ul`
  display: inline-flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  vertical-align: top;
  margin: 0;
  padding: 0;
  list-style: none;

  ${(props) =>
    props.isLoading &&
    css`
      animation: ${glow} 1.5s ease-in-out infinite;
    `}

  ${User} {
    position: relative;
    &:not(:first-child) {
      margin-left: ${(props) => marginOffset[props.size]}px;
    }
    &:nth-child(1) {
      z-index: 3;
    }
    &:nth-child(2) {
      z-index: 2;
    }
    &:nth-child(3) {
      z-index: 1;
    }
  }
`;

/**
 * Either pass the full list of users, or a `userCount` if known
 */
export const AvatarList = (props) => {
  const { isLoading, users, userCount, size } = props;
  const count = userCount || users.length;

  return (
    <Users aria-label="users" {...props}>
      {users.slice(0, 3).map(({ name, avatarUrl }, key) => (
        <User key={key}>
          <UserAvatar size={size} name={name} src={avatarUrl} isLoading={isLoading} />
        </User>
      ))}
      {count > 3 && (
        <UserEllipses aria-label={`${count - 3} more user(s)`}> &#43; {count - 3} </UserEllipses>
      )}
    </Users>
  );
};

AvatarList.propTypes = {
  isLoading: PropTypes.bool,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    })
  ),

  /**
   * Total number of users in the list
   */
  userCount: PropTypes.number,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

AvatarList.defaultProps = {
  isLoading: false,
  users: [
    { avatarUrl: null, name: 'loading' },
    { avatarUrl: null, name: 'loading' },
    { avatarUrl: null, name: 'loading' },
  ],
  userCount: null,
  size: 'medium',
};
