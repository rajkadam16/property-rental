/**
 * 
 */
package com.property.rental.service.core.dao;
import java.util.Optional;
import com.property.rental.service.core.api.db.UserAccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.property.rental.service.common.enity.UserAccountEntity;
import com.property.rental.service.core.api.dao.UserAccountDao;

@Repository("userAccountDao")
public class UserAccountDaoImpl implements UserAccountDao {
	@Autowired
	private UserAccountRepo userAccountRepo;

	@Override
	public Optional<UserAccountEntity> findByEmail(String email) {
		return userAccountRepo.findByEmail(email);
	}

	@Override
	public UserAccountEntity save(UserAccountEntity user) {
		return userAccountRepo.save(user);
	}
}

