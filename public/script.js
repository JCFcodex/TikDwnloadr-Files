const _0x24d0fc = _0x17e1;
function _0x17e1(_0x5bf5a7, _0x494d96) {
  const _0x3c1a67 = _0x3c1a();
  return (
    (_0x17e1 = function (_0x17e11f, _0x544fb2) {
      _0x17e11f = _0x17e11f - 0x1b2;
      let _0x401bca = _0x3c1a67[_0x17e11f];
      return _0x401bca;
    }),
    _0x17e1(_0x5bf5a7, _0x494d96)
  );
}
(function (_0x344fe0, _0x4f93b7) {
  const _0x5360f9 = _0x17e1,
    _0x191564 = _0x344fe0();
  while (!![]) {
    try {
      const _0x1ffd65 =
        (-parseInt(_0x5360f9(0x1bb)) / 0x1) *
          (parseInt(_0x5360f9(0x1d7)) / 0x2) +
        (parseInt(_0x5360f9(0x1c5)) / 0x3) *
          (-parseInt(_0x5360f9(0x1bc)) / 0x4) +
        (parseInt(_0x5360f9(0x1b6)) / 0x5) *
          (-parseInt(_0x5360f9(0x1c3)) / 0x6) +
        (parseInt(_0x5360f9(0x1be)) / 0x7) *
          (-parseInt(_0x5360f9(0x1ca)) / 0x8) +
        -parseInt(_0x5360f9(0x1d9)) / 0x9 +
        (parseInt(_0x5360f9(0x1b3)) / 0xa) *
          (parseInt(_0x5360f9(0x1cc)) / 0xb) +
        (-parseInt(_0x5360f9(0x1cd)) / 0xc) *
          (-parseInt(_0x5360f9(0x1dd)) / 0xd);
      if (_0x1ffd65 === _0x4f93b7) break;
      else _0x191564['push'](_0x191564['shift']());
    } catch (_0x265200) {
      _0x191564['push'](_0x191564['shift']());
    }
  }
})(_0x3c1a, 0x8b457);
function _0x3c1a() {
  const _0x5a95ef = [
    '#videoDetails',
    'nickname',
    '4502838iFtEGl',
    'likeCount',
    '121359qzGRsY',
    'Failed\x20to\x20fetch\x20video\x20details.\x20Please\x20try\x20again\x20later.',
    'click',
    'show',
    'stringify',
    '2472dQMHat',
    'POST',
    '2761npvHIe',
    '12ouDwAd',
    'responseJSON',
    '#downloadBtn',
    'clipboard',
    'val',
    'Unknown\x20error\x20occurred',
    'Failed\x20to\x20read\x20clipboard\x20contents:',
    '/download',
    'delay',
    '#pasteBtn',
    '10iNFhxi',
    'shareCount',
    '1670760fcktSw',
    '#views',
    'commentCount',
    'error',
    '50401169Uvrfks',
    '#username',
    'then',
    '#likes',
    '#loadingSpinner',
    'attr',
    'readText',
    '#videoUrlInput',
    'input',
    'ready',
    'hide',
    'avatar',
    'trim',
    'href',
    '27430jHGUnu',
    'text',
    '#title',
    '5ftzYEl',
    '#downloadVideoBtn',
    'success',
    'fadeIn',
    'disabled',
    '182284Gpcqrs',
    '100SwPqrs',
    '#errorMessage',
    '25739LkyIPY',
    'prop',
    'status',
  ];
  _0x3c1a = function () {
    return _0x5a95ef;
  };
  return _0x3c1a();
}
function formatNumber(_0x7b5b01) {
  return _0x7b5b01 >= 0xf4240
    ? (_0x7b5b01 / 0xf4240)['toFixed'](0x1) + 'M'
    : _0x7b5b01 >= 0x3e8
    ? _0x7b5b01 / 0x3e8 + 'K'
    : _0x7b5b01;
}
$(document)[_0x24d0fc(0x1e6)](function () {
  const _0x45d58a = _0x24d0fc,
    _0x4cb47d = $(_0x45d58a(0x1e4)),
    _0x568ff3 = $(_0x45d58a(0x1cf)),
    _0x4d10a0 = $(_0x45d58a(0x1e1)),
    _0x949511 = $(_0x45d58a(0x1c1)),
    _0x56f0d2 = $(_0x45d58a(0x1bd));
  function _0x53ac73() {
    const _0xac444d = _0x45d58a;
    _0x568ff3['prop'](_0xac444d(0x1ba), !0x0);
  }
  function _0x258119() {
    const _0x11f207 = _0x45d58a;
    _0x568ff3[_0x11f207(0x1bf)](_0x11f207(0x1ba), !0x1);
  }
  function _0x3aa81c() {
    const _0x457cb8 = _0x45d58a;
    _0x4d10a0[_0x457cb8(0x1e7)]();
  }
  function _0xbd45be(_0x2fea55) {
    const _0x32759f = _0x45d58a;
    _0x56f0d2[_0x32759f(0x1b4)](_0x2fea55 || _0x32759f(0x1d2))['show']();
  }
  function _0x211b4d(_0x4c19e0) {
    const _0x38897a = _0x45d58a;
    _0x56f0d2[_0x38897a(0x1e7)](), _0x949511[_0x38897a(0x1e7)]();
    const _0x59ee07 = setTimeout(function () {
      const _0x59e58e = _0x38897a;
      _0xbd45be(_0x59e58e(0x1c6)), _0x258119(), _0x3aa81c();
    }, 0x2710);
    $['ajax']({
      url: _0x38897a(0x1d4),
      method: _0x38897a(0x1cb),
      contentType: 'application/json',
      data: JSON[_0x38897a(0x1c9)]({ videoUrl: _0x4c19e0 }),
      beforeSend: function () {
        const _0x1426b3 = _0x38897a;
        _0x53ac73(),
          _0x4d10a0[_0x1426b3(0x1c8)]()[_0x1426b3(0x1d5)](0xfa0)['fadeOut']();
      },
      success: function (_0x3ddf94) {
        const _0x39c591 = _0x38897a;
        if (
          (clearTimeout(_0x59ee07),
          _0x258119(),
          _0x39c591(0x1b8) === _0x3ddf94[_0x39c591(0x1c0)])
        ) {
          const {
            desc: _0x1c6c52,
            author: _0x166561,
            statistics: _0x173388,
            video: _0x41c015,
            music: _0xe58497,
          } = _0x3ddf94['result'];
          $(_0x39c591(0x1b5))[_0x39c591(0x1b4)](_0x1c6c52 || 'No\x20Title'),
            $('#userAvatar')['attr']('src', _0x166561[_0x39c591(0x1e8)]),
            $(_0x39c591(0x1de))[_0x39c591(0x1b4)](_0x166561[_0x39c591(0x1c2)]),
            $(_0x39c591(0x1e0))[_0x39c591(0x1b4)](
              formatNumber(_0x173388[_0x39c591(0x1c4)])
            ),
            $('#comments')[_0x39c591(0x1b4)](
              formatNumber(_0x173388[_0x39c591(0x1db)])
            ),
            $(_0x39c591(0x1da))[_0x39c591(0x1b4)](
              formatNumber(_0x173388[_0x39c591(0x1d8)])
            ),
            $(_0x39c591(0x1b7))
              [_0x39c591(0x1e2)](_0x39c591(0x1b2), _0x41c015)
              ['removeAttr'](_0x39c591(0x1ba)),
            $('#downloadMusicBtn')
              [_0x39c591(0x1e2)](_0x39c591(0x1b2), _0xe58497)
              ['removeAttr'](_0x39c591(0x1ba)),
            _0x949511[_0x39c591(0x1d5)](0xfa0)[_0x39c591(0x1b9)]();
        } else
          _0x949511[_0x39c591(0x1e7)](), _0xbd45be(_0x3ddf94[_0x39c591(0x1dc)]);
      },
      error: function (_0x557a77, _0x534693, _0x1d2382) {
        const _0x2245b1 = _0x38897a;
        clearTimeout(_0x59ee07),
          _0x258119(),
          _0x3aa81c(),
          _0x949511[_0x2245b1(0x1e7)](),
          _0xbd45be(
            _0x557a77[_0x2245b1(0x1ce)] &&
              _0x557a77[_0x2245b1(0x1ce)][_0x2245b1(0x1dc)]
              ? _0x557a77[_0x2245b1(0x1ce)]['error']
              : 'Unknown\x20error\x20occurred'
          );
      },
    });
  }
  _0x4cb47d['on'](_0x45d58a(0x1e5), function () {
    const _0x2bd74f = _0x45d58a;
    '' !== $(this)[_0x2bd74f(0x1d1)]()['trim']() ? _0x258119() : _0x53ac73();
  }),
    _0x568ff3[_0x45d58a(0x1c7)](function () {
      const _0x362880 = _0x45d58a,
        _0x345e5d = _0x4cb47d[_0x362880(0x1d1)]()[_0x362880(0x1e9)]();
      '' !== _0x345e5d && _0x211b4d(_0x345e5d);
    }),
    $(_0x45d58a(0x1d6))[_0x45d58a(0x1c7)](function () {
      const _0x1d8e12 = _0x45d58a;
      navigator[_0x1d8e12(0x1d0)]
        [_0x1d8e12(0x1e3)]()
        [_0x1d8e12(0x1df)](function (_0x4bd3e7) {
          const _0xb2f6f2 = _0x1d8e12;
          _0x4cb47d[_0xb2f6f2(0x1d1)](_0x4bd3e7), _0x258119();
        })
        ['catch'](function (_0x5ad5c1) {
          const _0x11b2df = _0x1d8e12;
          console[_0x11b2df(0x1dc)](_0x11b2df(0x1d3), _0x5ad5c1);
        });
    });
});
