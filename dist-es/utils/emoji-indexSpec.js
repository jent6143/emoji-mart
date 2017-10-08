import emojiIndex from './emoji-index';

describe('#emojiIndex', function () {
  describe('search', function () {
    it('should work', function () {
      expect(emojiIndex.search('pineapple')).toEqual([{
        id: 'pineapple',
        name: 'Pineapple',
        colons: ':pineapple:',
        emoticons: [],
        unified: '1f34d',
        skin: null,
        native: '🍍'
      }]);
    });

    it('should filter only emojis we care about, exclude pineapple', function () {
      var emojisToShowFilter = function emojisToShowFilter(unified) {
        return unified !== '1F34D';
      };
      expect(emojiIndex.search('apple', { emojisToShowFilter: emojisToShowFilter }).map(function (obj) {
        return obj.id;
      })).not.toContain('pineapple');
    });

    it('can include/exclude categories', function () {
      expect(emojiIndex.search('flag', { include: ['people'] })).toEqual([]);
    });

    it('can search for thinking_face', function () {
      expect(emojiIndex.search('thinking_fac').map(function (x) {
        return x.id;
      })).toEqual(['thinking_face']);
    });

    it('can search for woman-facepalming', function () {
      expect(emojiIndex.search('woman-facep').map(function (x) {
        return x.id;
      })).toEqual(['woman-facepalming']);
    });
  });
});