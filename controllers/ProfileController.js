const Profile = require('./models/Profile');

exports.updateProfile = async (req, res) => {
    try {
        const userId = req.user.userId; // Extracted from JWT token
        const { bio, photo } = req.body;

        // Find the profile associated with the authenticated user
        const profile = await Profile.findOne({ user: userId });

        if (!profile) {
            return res.status(404).json({ success: false, message: 'Profile not found' });
        }

        // Update the profile fields with the provided data
        profile.bio = bio;
        profile.photo = photo;

        // Save the updated profile
        await profile.save();

        res.status(200).json({ success: true, message: 'Profile updated successfully', profile });
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

exports.setProfileVisibility = async (req, res) => {
    try {
        const userId = req.user.userId; // Extracted from JWT token
        const { visibility } = req.body;

        // Find the profile associated with the authenticated user
        const profile = await Profile.findOne({ user: userId });

        if (!profile) {
            return res.status(404).json({ success: false, message: 'Profile not found' });
        }

        // Update the visibility field with the provided data
        profile.visibility = visibility;

        // Save the updated profile
        await profile.save();

        res.status(200).json({ success: true, message: 'Profile visibility updated successfully', profile });
    } catch (error) {
        console.error('Set profile visibility error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

